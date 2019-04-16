import React, {Component} from 'react'
import Header from '@/component/header/header'
import Footer from '@/component/footer/footer'

class Search extends Component {
    goBack = () => {
        this.props.history.push('/')
    }

    render () {
        return (
            <div className="">
                <Header title="返回" goBack={this.goBack}/>
                <Footer/>
            </div>
        )
    }
}

export default Search