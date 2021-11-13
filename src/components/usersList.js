import User from './User';

const usersList = ({ users }) => {
    return users.map((user, index) => {
        return <User data={user} />
    });
}

export default usersList
