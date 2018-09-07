/**
 * Created by Mitaka on 05-Sep-18.
 */
import React from 'react';

const Grid = (props) => {

    let counter = 0;

    const propTranslate = {
        boldFirstRow: {location: 'firstRow', value: 'bold'},
        boldFirstColumn: {location: 'firstColumn', value: 'bold'},
        boldLastRow: {location: 'lastRow', value: 'bold'},
        boldLastColumn: {location: 'lastColumn', value: 'bold'},
        bold: {location: 'all', value: 'bold'},

        normalFirstRow: {location: 'firstRow', value: 'normal'},
        normalFirstColumn: {location: 'firstColumn', value: 'normal'},
        normalLastRow: {location: 'lastRow', value: 'normal'},
        normalLastColumn: {location: 'lastColumn', value: 'normal'},
        normal: {location: 'all', value: 'normal'},

        justifyContentLeft: {location: 'all', value: 'left'},
        justifyContentRight: {location: 'all', value: 'right'},
        justifyContentCenter: {location: 'all', value: 'center'},

        justifyContentFirstRowLeft: {location: 'firstRow', value: 'left'},
        justifyContentFirstRowRight: {location: 'firstRow', value: 'light'},
        justifyContentFirstRowCenter: {location: 'firstRow', value: 'center'},

        justifyContentLastRowLeft: {location: 'lastRow', value: 'left'},
        justifyContentLastRowRight: {location: 'lastRow', value: 'light'},
        justifyContentLastRowCenter: {location: 'lastRow', value: 'center'},

        justifyContentFirstColumnLeft: {location: 'firstColumn', value: 'left'},
        justifyContentFirstColumnRight: {location: 'firstColumn', value: 'right'},
        justifyContentFirstColumnCenter: {location: 'firstColumn', value: 'center'},

        justifyContentLastColumnLeft: {location: 'lastColumn', value: 'left'},
        justifyContentLastColumnRight: {location: 'lastColumn', value: 'right'},
        justifyContentLastColumnCenter: {location: 'lastColumn', value: 'center'},

        justifyTextLeft: {location: 'all', value: 'textAlignLeft'},
        justifyTextRight: {location: 'all', value: 'textAlignRight'},
        justifyTextCenter: {location: 'all', value: 'textAlignCenter'},
        justifyTextJustify: {location: 'all', value: 'textAlignJustify'},

        justifyTextFirstRowLeft: {location: 'firstRow', value: 'textAlignLeft'},
        justifyTextFirstRowRight: {location: 'firstRow', value: 'textAlignRight'},
        justifyTextFirstRowCenter: {location: 'firstRow', value: 'textAlignCenter'},
        justifyTextFirstRowJustify: {location: 'firstRow', value: 'textAlignJustify'},

        justifyTextLastRowLeft: {location: 'lastRow', value: 'textAlignLeft'},
        justifyTextLastRowRight: {location: 'lastRow', value: 'textAlignRight'},
        justifyTextLastRowCenter: {location: 'lastRow', value: 'textAlignCenter'},
        justifyTextLastRowJustify: {location: 'lastRow', value: 'textAlignJustify'},

        justifyTextFirstColumnLeft: {location: 'firstColumn', value: 'textAlignLeft'},
        justifyTextFirstColumnRight: {location: 'firstColumn', value: 'textAlignRight'},
        justifyTextFirstColumnCenter: {location: 'firstColumn', value: 'textAlignCenter'},
        justifyTextFirstColumnJustify: {location: 'firstColumn', value: 'textAlignJustify'},

        justifyTextLastColumnLeft: {location: 'lastColumn', value: 'textAlignLeft'},
        justifyTextLastColumnRight: {location: 'lastColumn', value: 'textAlignRight'},
        justifyTextLastColumnCenter: {location: 'lastColumn', value: 'textAlignCenter'},
        justifyTextLastColumnJustify: {location: 'lastColumn', value: 'textAlignJustify'},

        lowerCase: {location: 'all', value: 'lowerCase'},
        lowerCaseFirstRow: {location: 'firstRow', value: 'lowerCase'},
        lowerCaseLastRow: {location: 'lastRow', value: 'lowerCase'},
        lowerCaseFirstColumn: {location: 'firstColumn', value: 'lowerCase'},
        lowerCaseLastColumn: {location: 'lastColumn', value: 'lowerCase'},

        upperCase: {location: 'all', value: 'upperCase'},
        upperCaseFirstRow: {location: 'firstRow', value: 'upperCase'},
        upperCaseLastRow: {location: 'lastRow', value: 'upperCase'},
        upperCaseFirstColumn: {location: 'firstColumn', value: 'upperCase'},
        upperCaseLastColumn: {location: 'lastColumn', value: 'upperCase'},

        capitalize: {location: 'all', value: 'capitalize'},
        capitalizeFirstRow: {location: 'firstRow', value: 'capitalize'},
        capitalizeLastRow: {location: 'lastRow', value: 'capitalize'},
        capitalizeFirstColumn: {location: 'firstColumn', value: 'capitalize'},
        capitalizeLastColumn: {location: 'lastColumn', value: 'capitalize'},

        //Add textAlign - left, center, right, justify
    };

    const cssDefinitions = {
        bold: {name: 'fontWeight', value: 'bold'},
        normal: {name: 'fontWeight', value: 'normal'},

        textAlignLeft: {name: 'textAlign', value: 'left'},
        textAlignRight: {name: 'textAlign', value: 'right'},
        textAlignCenter: {name: 'textAlign', value: 'center'},
        textAlignJustify: {name: 'textAlign', value: 'justify'},

        upperCase: {name: 'textTransform', value: 'uppercase'},
        lowerCase: {name: 'textTransform', value: 'lowercase'},
        capitalize: {name: 'textTransform', value: 'capitalize'},

        left: {name: 'justifySelf', value: 'start'},
        right: {name: 'justifySelf', value: 'end'},
        center: {name: 'justifySelf', value: 'center'}
    };

    console.log('Content elements: ', props.content);

    const locations = {
        all: [],
        firstRow: [],
        lastRow: [],
        firstColumn: [],
        lastColumn: []
    };

    //Fill in locations
    Object.keys(props).map(element => {
        if(propTranslate[element]){

            locations[propTranslate[element].location].push(propTranslate[element].value);
        }
    });

    const createElement = (counter, content, classes) => {

        const elementClasses = {};

        const classesList = [].concat(...classes);

        classesList.map(element => {

            elementClasses[cssDefinitions[element].name] = cssDefinitions[element].value;

        });

        console.log('Classes List: ', elementClasses);

        return <div style={elementClasses} key={counter}>{content}</div>;
    };

    console.log('Locations: ', locations);


    const content = props.content.map(element => {
        counter++;

        //Start First Row
        if(counter === 1){

            return createElement(counter, element, [locations.all, locations.firstColumn, locations.firstRow]);
        }

        else if(counter < props.columns){
            return createElement(counter, element, [locations.all, locations.firstRow]);
        }

        else if(counter === parseInt(props.columns, 10)){

            return createElement(counter, element, [locations.all, locations.lastColumn, locations.firstRow]);
        }
        //End First Row

        //Start Body
        //First Column Body
        else if(counter > props.columns && (counter % props.columns === 1)){
            return createElement(counter, element, [locations.all, locations.firstColumn]);
        }
        //Last Column Body
        else if(counter > props.columns && (counter % props.columns === 0)){
            return createElement(counter, element, [locations.all, locations.lastColumn]);
        }
        //Body Elements other than first and last columns
        else {
            return createElement(counter, element, [locations.all]);
        }
        //End Body

        //Last Row - development
    });

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
            justifyContent: 'center', //adjustable?
            gridGap: '20px', //adjustable?
        }}>
            {content}</div>
    );
};

export default Grid;