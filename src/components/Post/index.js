import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';

const PostTitle = ({ title, date }) => (
    <span className="post-title">{title} {new Date(date).toGMTString()}</span>
);

const PostContent = ({ data }) => (
    <span className="post-data">{data}</span>
);

class Post extends PureComponent {
    render() {
        const { title, data, date } = this.props;
        return (
            <Flexbox flexDirection="column">
                <PostTitle title={title} date={date}/>
                <PostContent data={data} />
            </Flexbox>
        )
    }
}

export default Post;
