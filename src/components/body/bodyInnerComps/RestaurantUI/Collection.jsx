import { useParams } from 'react-router-dom'

const Collection = () => {
    const {resid} = useParams()   
    return (
        <div>{resid}</div>
    )
}

export default Collection