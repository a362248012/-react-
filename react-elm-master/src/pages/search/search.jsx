import React, {Component} from 'react'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import './search.scss'

class Search extends Component {
    goBack = () => {
        this.props.history.push('/')
    }

    render () {
        return (
            <div className="search-container">
                <Header title="返回" goBack={this.goBack}/>
                <ul>
                    <li>一个</li>
                    <li>二个</li>
                    <li>三个</li>
                    <li>四个</li>
                    <li>五个</li>
                    <li>六个</li>
                    <li>七个</li>
                    <li>八个</li>
                </ul>
                <Footer/>
            </div>
        )
    }
}

export default Search