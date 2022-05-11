import { memo } from "react";
import { BasicCard } from "../../components"
import { ILayoudCard, TypeButtonsCard } from '../../interfaces';
import './style.scss'

interface Props extends ILayoudCard{
    typeButtons: TypeButtonsCard
}

export const LayoutContainerCards = memo(({ cards, typeButtons }:Props) => {
    
    return(
        <div className="container-cards">
        {
            cards.map( (card,_) => (
                <BasicCard {...card } typeButtons={typeButtons} key={card.id} />
            ))
        }
        </div>
    )
})
