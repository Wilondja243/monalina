export class Event{

    constructor(selectors){
        this.text = "Freign Company Width Difference Innovation."
        this.index = 0;
        this.scroll = this.scrollEvent(selectors);
    }

    scrollEvent(selectors){

        if(!selectors || selectors.length == 0){
            return
        }
      
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                const element = entry.target;
                if(entry.isIntersecting){
                    if(element.classList.contains('h1')){
                        element.classList.add('opacity');
                    }
                    else if(element.classList.contains('short-services')){
                        element.classList.add('bottom');
                    }
                    else if(element.classList.contains('ex')){
                        element.classList.add('width');
                    }
                    else if(element.classList.contains('start-with')){
                        element.classList.add('mt');
                    }
                    else if(element.classList.contains('project-infos') ||
                            element.classList.contains('one') ||
                            element.classList.contains('two')){
                        this.prAnime(element, ['mt', 'mt1', 'mt2']);
                    }
                    else if(element.classList.contains('services')){
                        this.wrLetter()
                    }
                }
            });
        },{threshold:'0.5'})

        selectors.forEach(selector =>{
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                console.log(element);
                observer.observe(element);
            })
        })
    }

    // project animation

    prAnime(element, elementSelectors){
        elementSelectors.forEach(elementSelector =>{
            element.classList.add(elementSelector);
        })
    }

    wrLetter(){
        if(this.index < this.text.length){
            document.querySelector('.text').innerHTML += this.text[this.index];
            this.index ++;
            setTimeout(()=> this.wrLetter(), 100);
        }
    }
}