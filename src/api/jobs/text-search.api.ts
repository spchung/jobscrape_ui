type TextSearchParams = {
    title: string | null;
    description: string | null;
    // limit: number;
    // offset: number;
}

const textSearch = async ({
    title,
    description,
    // limit,
    // offset,
}: TextSearchParams) => {
    // fetch 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const res = await fetch("http://localhost:8080/v1/search/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
        })
    
    })
    const data = await res.json()
    return data
}

export default textSearch;
