import { Link } from 'react-router-dom'
import { Input } from 'reactstrap'
import { LI } from '../../../../AbstractElements'
import { FlipBackContentProps, SidebarMenuItem } from '../../../../Types/Layout.type'
import SvgIcon from '../../../../Utils/CommonComponents/CommonSvgIcons'
import { Href } from '../../../../Utils/Constants'

export default function FlipBackContent({ handleBookmark, bookmarkItems, handleSearch }: FlipBackContentProps) {
    return (
        <LI>
            <div className="flip-back-content">
                <Input type="text" placeholder="search..." onChange={handleSearch} />
                <div className={bookmarkItems.length > 0 ? "Typeahead-menu custom-scrollbar is-open" : ''}>
                    {bookmarkItems.map((data: SidebarMenuItem, index: number) => (
                        <div className="ProfileCard u-cf" key={index}>
                            <div className="ProfileCard-avatar">
                                <SvgIcon className="svg-color stroke-primary" iconId={data.icon} />
                            </div>
                            <div className="ProfileCard-details">
                                <div className="ProfileCard-realName">
                                    <Link className="realname" to={data.path || ''}>{data.title}</Link>
                                    <span className="pull-right">
                                        <a href={Href}>
                                        <SvgIcon iconId="star" className={`svg-color icon-star ${data.bookmark ? "starred" : ""}`} onClick={(e:any) => handleBookmark(e, data)}/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LI>
    )
}