import { LI, UL } from '../../../AbstractElements'
import { Href } from '../../../Utils/Constants'

export default function NavCustomizer() {
  return (
    <UL className='simple-list'>
      <LI className='cog-click icon-btn btn-primary' href={Href}>
        <i className="fa-solid fa-spin fa-cog" />
      </LI>
    </UL>
  )
}