const getUsuarioByID = (id, callback ) => {
    
    const user = {
        id,
        name: 'Andres'
    }

    setTimeout(() => {
        callback(user)
    })
}

getUsuarioByID(10, ( user ) => {
    console.log( user.name.toUpperCase() )
});