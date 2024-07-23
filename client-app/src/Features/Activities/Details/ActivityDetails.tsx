import React, { useEffect } from 'react';
import { Button, Card, Grid, GridColumn, Icon, Image } from 'semantic-ui-react';
import { useStore } from '../../../App/Stores/store';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';

export default observer (function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !selectedActivity) return <LoadingComponent/>;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={selectedActivity}/>
                <ActivityDetailedInfo activity={selectedActivity}/>
                <ActivityDetailedChat/>
            </Grid.Column>
            <GridColumn width={6}>
                <ActivityDetailedSidebar/>
            </GridColumn>
        </Grid>
    )
})