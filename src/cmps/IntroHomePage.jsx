

export function IntroHomePage() {
    return (
        <section className="intro-home-page main-layout">
            <div className="top-container flex-between">
                <div className="intro-img"></div>
                <div>
                    <h2>Enjoyable place for all the family</h2>
                    <p>
                        Our relaxed surroundings make dining with us a great experience for everyone. 
                        We can even arrange a tour of the farm before your meal.
                    </p>
                </div>
            </div>
            <div className="low-container flex-between">
                <div>
                    <h2>The most locally sourced food</h2>
                    <p>
                        All our ingredients come directly from our farm or local fishery. 
                        So you can be sure that you’re eating the freshest, most sustainable food.
                    </p>
                </div>
                <div className="intro-img"></div>
            </div>
        </section>
    )
}
