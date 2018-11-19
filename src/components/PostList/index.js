import React, { PureComponent } from 'react';
import Post from '../Post';

class PostList extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => (
                        <Post key={item.id} title={item.title} data={item.data} date={item.date} />
                    ))
                }
            </div>
        )
    }
}

export default PostList;
