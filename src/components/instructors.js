/* @flow */
import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import Avatar from './avatar';

export type Props = { instructors: Array<{ profile: number, name: string, email: string }> };

const Instructors = (props: Props) => {
    const { instructors } = props;
    return (
        <InstructorsList>
            {instructors.map((instructor, index) => {
                return (
                    <Instructor key={`${instructor.name}-${index}`} className="columns">
                        <AvatarWrapper className="column is-narrow">
                            <Avatar email={instructor.email} name={instructor.name} />
                        </AvatarWrapper>
                        <div className="column">{instructor.name}</div>
                    </Instructor>
                );
            })}
        </InstructorsList>
    );
};

const AvatarWrapper = styled.div`margin-right: ${theme.spacing.tiny};`;

const InstructorsList = styled.ul`
    display: flex;
    flex-direction: columns;
    margin-bottom: ${theme.spacing.tiny};

    li.columns {
        margin-right: ${theme.spacing.small};
        margin-bottom: 0;

        .column {
            padding-bottom: 0;
        }
    }
`;

const Instructor = styled.li`
    &.columns {
        margin-left: 0;
        margin-right: 0;
    }

    .column {
        padding-left: 0;
        padding-right: 0;
    }

    .avatar {
        margin-right: ${theme.spacing.tiny};
    }
`;

export default Instructors;
