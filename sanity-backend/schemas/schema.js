/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import picture from './picture';
import category from './category';
import dimensions from './dimensions';
import contact from './contact';
import social from './social';
import link from './link';
import dates from './dates';
import address from './address';
import home from './home';
import event from './event';

export default createSchema({
  // We name our schema

  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    picture,
    category,
    dimensions,
    contact,
    social,
    link,
    dates,
    event,
    address,
    home,
  ]),
});
