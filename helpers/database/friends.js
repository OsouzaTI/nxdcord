async function getAllFriends(id) {

    const response = await fetch('http://localhost:3001/user/friends',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({id})
    });

    const friends = await response.json();
    
    return response.status == 200 ? friends : [{}];

}

export {
    getAllFriends
};