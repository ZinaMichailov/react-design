import { Component } from 'react'
import { IntroHomePage } from '../cmps/IntroHomePage'
import { Menu } from '../cmps/Menu'
import { MoreIntroHomePage } from '../cmps/MoreIntroHomePage'

export class HomePage extends Component {
    render() {
        return (
            <section className="home-page">
                <IntroHomePage />
                <Menu />
                <MoreIntroHomePage />
            </section>
        )
    }
}
