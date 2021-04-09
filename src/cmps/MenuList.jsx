import { MenuPreview } from "./MenuPreview";

export function MenuList({items}) {
    return (
        <div className="menu-list">
            {items && items.map((item, idx) => <MenuPreview key={idx} item={item} />)}
        </div>
    )
}
