import React from 'react';

class UserCard extends React.Component{
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.login}
                {this.props.followers}
                <img src = {this.props.avatar_url}/>
                {this.props.followers.map(fol => (
                    <div>{fol.login}</div>
                ))}
            </div>
        )
    }
}

export default UserCard;