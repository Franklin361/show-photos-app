import { Icon } from "../../assets";
import "./style.scss";
import { NameIcon } from '../../interfaces/generic';
import { useFilterSelectedStore } from "../../stores";

type Filter = 'likes' | 'createdAt' | 'dislike';

export const FilterBar = () => {

    const onSelectedOption = useFilterSelectedStore(state => state.onSelectedOption)
    const filter = useFilterSelectedStore(state => state.filter);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        onSelectedOption(e.target.id as Filter)
    }

    return (
        <div className='container-filter'>
            <p className='instrucction-filter'>Select one of these filters: </p>
            <div className='container-buttons'>
                <OptionFilter
                    label="More Popular"
                    icon="like"
                    id="likes" defaultCheck={filter === 'likes'}
                    onChange={handleChange}
                />
                <OptionFilter
                    label="More Recent"
                    icon="watch"
                    id="createdAt" defaultCheck={filter === 'createdAt'}
                    onChange={handleChange}
                />
                <OptionFilter
                    label="Less Popular"
                    icon="dislike"
                    id="dislike" defaultCheck={filter === 'dislike'}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

interface Props {
    icon: NameIcon;
    label: string;
    id: string;
    defaultCheck?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const OptionFilter = ({ icon, label, id, defaultCheck = false, onChange }: Props) => {


    return (
        <div>
            <input type="radio" name="filter" id={id} defaultChecked={defaultCheck} onChange={onChange} />
            <label htmlFor={id} className="btn-filter">
                {label}
                <Icon name={icon} className="icon-barfilter" />
            </label>
        </div>
    )
}