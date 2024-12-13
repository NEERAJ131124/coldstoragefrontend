import React from 'react'
import { H4, P } from '../../../../AbstractElements'
import LightLayout from './LightLayout'
import DarkLayout from './DarkLayout'
import MixLayout from './MixLayout'

export default function ThemeColorMode() {
    
    return (
        <div className="mb-3 p-2 rounded-3 b-t-primary border-3">
            <div className="color-header mb-2">
                <H4>Theme color mode:</H4><P>Choose between 3 different mix layout.</P>
            </div>
            <div className="color-body d-flex align-items-center justify-space-between">
                <LightLayout />
                <DarkLayout />
                <MixLayout />
            </div>
        </div>
    )
}