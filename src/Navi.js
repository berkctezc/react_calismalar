import React, { Component } from 'react' //rcc kısayolu ile olusturdu ve dosya manuel olusturuldu

export default class Navi extends Component { //public olarak navi componentden inheritance alıyor
    render() {
        return (
            <div>
             <h2>{this.props.title}</h2>   
            </div>
        )
    }
}
