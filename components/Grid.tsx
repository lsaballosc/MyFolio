import React from 'react'
import { BentoGridItem } from './ui/BentoGrid'
// import BentoGrid as default if that's the case, or fix the named export below if needed
import {BentoGrid} from './ui/BentoGrid'
import { gridItems } from '@/data'


export const Grid = () => {
  return (
   <section id="about">
    <BentoGrid>
       {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
        <BentoGridItem 
        id = {id}
        key = {id}
        title = {title}
        description = {description}
        className = {className}
        img= {img}
        imgClassName = {imgClassName}
        titleClassName = {titleClassName}
        spareImg = {spareImg}
        
        
        />
       ))}

    </BentoGrid>

   </section>
  )
}
