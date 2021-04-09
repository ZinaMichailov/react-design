import { Component } from 'react'
import { menuService } from '../services/menuService'
import { MenuList } from './MenuList'
import divide from '../assets/img/patterns/pattern-divide.svg'

export class Menu extends Component {
    state = {
        items: null
    }

    componentDidMount() {
        this.loadItems()
    }

    async loadItems() {
        const items = await menuService.getItems()
        console.log(items);
        this.setState({ items })
    }

    render() {
        const { items } = this.state
        return (
            items && <section className="menu">
                <div className="divide main-layout">
                    <img src={divide} alt=""/>
                </div>
                <div className="main-content main-layout flex">
                    <div>
                        <h2>A few highlights from our menu</h2>
                        <p>
                            We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
                            Our menu is revamped every season.
                        </p>
                    </div>
                    <MenuList items={items} />
                </div>
            </section>
        )
    }
}
