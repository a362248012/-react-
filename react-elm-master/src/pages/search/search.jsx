import React, {Component} from 'react'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import './search.scss'

class Search extends Component {
    goBack = () => {
        this.props.history.push('/')
    }
    state = {
        a: {color: 'rgb(255, 153, 0)'},
        iconUrl: 'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/'
    }
    render () {
        return (
            <div className="search-container">
                <div className='gold-shop'>
                    <div>
                        <div className='title' style={this.state.a}>金币商城</div>
                        <span className='content'>0元好物在这里</span>
                    </div>
                    <img className='icon' src={this.state.iconUrl} alt=""/>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Search