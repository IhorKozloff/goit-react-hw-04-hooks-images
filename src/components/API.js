const KEY = "25226390-6524195878b00f535edfb636d";
const axios = require('axios').default;

export const searchByName = async (name, page) => {
    try {
        const response = await axios.get(
            `https://pixabay.com/api/?q=${name}&key=${KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
        );  
        return response.data.hits;
    } catch (error) {
        console.log(error.message)
    }
}
