let users = [];

function joinUser(socketId,userName,roomName){
    const user = {
        socketId: socketId,
        userName: userName,
        roomName: roomName
    }
    users.push(user);
    return user;
}