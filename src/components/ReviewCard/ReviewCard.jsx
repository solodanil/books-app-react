import { BaseCard } from "../BaseCard/BaseCard"


export const ReviewCard = (props) => {
    return <BaseCard title={ props.author }>
        { props.children }
    </BaseCard>
}