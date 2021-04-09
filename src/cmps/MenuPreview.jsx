

export function MenuPreview({item}) {
    return (
        <div className="item-preview flex-between">
            <img src={item.imgUrl} alt=""/>
            <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}
