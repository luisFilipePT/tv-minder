import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/core';

import { requestBasicShowInfoAction } from 'store/tv/actions';
import { selectBasicShowInfoForDisplay } from 'store/tv/selectors';
import { selectFollowedShows } from 'store/user/selectors';
import ShowsWithRecentEpisodes from 'components/myShows/ShowsWithRecentEpisodes';
import AllShows from 'components/myShows/AllShows';

const MyShows = () => {
  const dispatch = useDispatch();
  const followedShows = useSelector(selectFollowedShows);
  const recentShows = useSelector(selectBasicShowInfoForDisplay);
  console.log('recentShows:', recentShows);

  useEffect(() => {
    dispatch(requestBasicShowInfoAction());
  }, [dispatch, followedShows]);

  return (
    <Box maxW="85%" m="40px auto 0">
      <ShowsWithRecentEpisodes shows={recentShows} />

      {/* All shows will show up at bottom of page */}
      {/* <AllShows showsInfo={showsInfo} /> */}
    </Box>
  );
};

export default MyShows;
