/**
 * Created by Mitaka on 08-Sep-18.
 */
import React, {Component} from 'react';

import Slide from './Slide/Slide';

class Carousel extends Component{

    state = {
        slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
        slidesOrder: [0, 1, 2, 3, 4],
        // slideClasses: ['FarLeft', 'CloseLeft', 'Center', 'CloseRight', 'FarRight'],
        // selectedSlide: 1
    };

    //Should take book information and book cover image

    // selectSlide = (slideNum) => {
    //     // console.log('Selected Slide:', slideNum);
    //
    //     this.setState((prevState) => {
    //         // console.log('Prev State: ', prevState.slides);
    //
    //         const oldSlides = prevState.slides;
    //
    //         if(slideNum > 0 && slideNum < this.state.slides.length){
    //             return {slides: oldSlides.concat(oldSlides.splice(0, slideNum))};
    //         }
    //
    //         return null;
    //     });
    // };


    selectSlide = (slideNum) => {
        if(slideNum > 0 && slideNum < this.state.slidesOrder.length){
            console.log('Selected slide: ', slideNum);

            const current = this.state.slidesOrder.indexOf(0);

            // console.log('Current position of zero: ', current);

            const selected = this.state.slidesOrder.indexOf(slideNum);

            // console.log('Position of the selected: ', selected);

            let offset = current - selected;

            // console.log('Offset: ', offset);

            if(offset < 0){
                offset += 5;
            }

            // console.log('Offset: ', offset);

            this.setState((prevState) => {
                const oldOrder = prevState.slidesOrder;

                return {slidesOrder: oldOrder.concat(oldOrder.splice(0, offset))};
            });
        }
    };




    render(){
        //1# render all elements
        //2# pass the following props: slideNumber, content, selectSlide

        return <div style={{
            boxSizing: 'border-box',
            height: '400px',
            position: 'relative',
            perspective: '100px',
            transformStyle: 'preserve-3d',
            margin: '50px auto'
        }}>
            {/*{this.state.slidesOrder}*/}
            {/*Selected slide: {this.state.selectedSlide}*/}
            {this.state.slides.map((slide, index) =>
                <Slide
                    key={index}
                    slideNumber={this.state.slidesOrder[index]}
                    content={slide}
                    realIndex={index}
                    selectSlide={this.selectSlide}
                />
            )}
        </div>;
    }

}

export default Carousel;