
import axios from "axios";

const amountRow = Math.floor(window.innerWidth / 360) * 3;
const apiKey = '23544458-47d8a7ce6c6a4e594a1925349';

const fetchCollection = ({searchQuery = '', currentPage = 1}) => {
    return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${amountRow}`
    ).then(response => response.data.hits)
}

export default  {fetchCollection} 