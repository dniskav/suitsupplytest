import React, { PureComponent } from 'react';
import Post from '../Post';

class PostList extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.sort((a, b) => b.date - a.date).map((item) => (
                        <Post key={item.id} title={item.title} data={item.data} date={item.date} />
                    ))
                }
            </div>
        )
    }
}

export default PostList;
