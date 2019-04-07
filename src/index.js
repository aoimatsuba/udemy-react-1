import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} time={faker.date.weekday()} content={faker.lorem.sentence()} />
            </ApprovalCard>
            <CommentDetail author={faker.name.firstName()} time={faker.date.weekday()} content={faker.lorem.sentence()} />
            <CommentDetail author={faker.name.firstName()} time={faker.date.weekday()} content={faker.lorem.sentence()} />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
