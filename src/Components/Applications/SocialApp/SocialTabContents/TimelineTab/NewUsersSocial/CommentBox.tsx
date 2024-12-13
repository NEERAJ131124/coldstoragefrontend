import React from 'react'
import { Input, InputGroup } from 'reactstrap'
import { Btn, Image } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'

export default function CommentBox() {
    return (
        <div className="comments-box">
            <div className="d-flex gap-3">
                <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="" src={dynamicImage(`user/1.jpg`)} />
                <div className="flex-grow-1">
                    <InputGroup className="text-box">
                        <Input className="input-txt-bx" type="text" name="message-to-send" placeholder="Post Your Comments" />
                        <div className="input-group-append">
                            <Btn color='transparent'>
                                <i className="fa-regular fa-face-smile" />
                            </Btn>
                        </div>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}