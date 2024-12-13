import { Toast, ToastBody } from 'reactstrap'
import { Image, P } from '../../../../AbstractElements'
import { ToastPlacementContentProp } from '../../../../Types/BonusUi.type'
import { dynamicImage } from '../../../../Utils'

export default function ToastPlacementContent({ selectedPosition }: ToastPlacementContentProp) {
    return (
        <div className='bg-light position-relative bd-example-toasts'>
            <div className={`toast-container p-3 position-absolute ${selectedPosition}`} id='toastPlacement'>
                <Toast>
                    <div className='toast-img toast-header'>
                        <Image className='rounded me-2' src={dynamicImage(`other-images/profile.png`)} alt='profile' />
                        <strong className='me-auto'>{'Admiro Theme'}</strong>
                        <small className="d-sm-block d-none">{"25 min ago"}</small>
                    </div>
                    <ToastBody className='toast-dark txt-dark'>
                        <P className='toast-content'>
                            <em className="text-danger">{'Attackers'}</em>{' on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.'}
                        </P>
                    </ToastBody>
                </Toast>
            </div>
        </div>
    )
}