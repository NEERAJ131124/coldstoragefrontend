/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import { CardBody, Input, Label } from 'reactstrap';
import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from 'react-image-crop';
import { useDebounceEffect } from './UseDebounceEffect';
import { canvasPreview } from './CanvasPreview';

export default function ImageCropperBody() {
    const [imageSrc, setImageSrc] = useState("");
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [aspect, setAspect] = useState<number | undefined>(16 / 9);

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined);
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setImageSrc(reader.result?.toString() || "")
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
        return centerCrop(makeAspectCrop({ unit: "%", width: 90, }, aspect, mediaWidth, mediaHeight), mediaWidth, mediaHeight);
    }
    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        if (aspect) {
            const { width, height } = e.currentTarget;
            setCrop(centerAspectCrop(width, height, aspect));
        }
    }
    useDebounceEffect(async () => {
        if (completedCrop?.width && completedCrop?.height && imageRef.current && previewCanvasRef.current) {
            canvasPreview(imageRef.current, previewCanvasRef.current, completedCrop, scale, rotate);
        }
    }, 100, [completedCrop, scale, rotate]
    );

    return (
        <CardBody>
            <Input type="file" accept="image/*" onChange={onSelectFile} />
            <Label htmlFor="scale-input">{'Scale: '}</Label>
            <Input
                id="scale-input"
                type="number"
                step="0.1"
                value={scale}
                disabled={!imageSrc}
                onChange={(e) => setScale(Number(e.target.value))}
            />
            <Label htmlFor="rotate-input">{'Rotate: '}</Label>
            <Input
                id="rotate-input"
                type="number"
                value={rotate}
                disabled={!imageSrc}
                onChange={(e) =>
                    setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
                }
            />
            {!!imageSrc && (
                <ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} onComplete={(c) => setCompletedCrop(c)} aspect={aspect}>
                    <img ref={imageRef} alt="Crop me" src={imageSrc} onLoad={onImageLoad} className="crop-image" />
                </ReactCrop>
            )}
            <div>
                {!!completedCrop && (
                    <canvas
                        ref={previewCanvasRef}
                        className="preview-canvas"
                        style={{ width: completedCrop.width, height: completedCrop.height, }}
                    />
                )}
            </div>
        </CardBody>
    )
}

