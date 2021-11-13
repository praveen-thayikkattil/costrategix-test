import React from 'react'

const User = ({ data }) => {
    return (
        <article className="user">
                <figure className="user-avatar">
                    <img src={`https://avatars.dicebear.com/v2/avataaars/${data.name}.svg`} alt={data.name} />
                </figure>

                <div className="user-details">
                    <header>
                    <h1 className="user-name">{data.name}</h1>
                    </header>

                    <ul className="user-contact-details">
                    <li>
                        <strong>Email:</strong>
                        <span>{data.email}</span>
                    </li>

                    <li>
                        <strong>Phone:</strong>
                        <span>{data.phone}</span>
                    </li>

                    <li>
                        <strong>Company:</strong>
                        <span>{data.company.name}</span>
                    </li>

                    <li>
                        <strong>Website:</strong>
                        <span>{data.website}</span>
                    </li>

                    <li>
                        <strong>Address:</strong>
                        <span>
                            {`${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`}
                        </span>
                    </li>
                    </ul>
                </div>
            </article>
    )
}

export default User
