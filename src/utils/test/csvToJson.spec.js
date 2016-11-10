import { expect } from 'chai'
import { describe, it } from 'mocha'
import csvToJson from '../csvToJson'

describe('csvToJson transforms a CSV into a JSON-dataset and returns unique options (channels and campaigns) and the given dataset', () => {
  it('should return the unique options and dataset', () => {
    const csv = 'campaign,channel,clicks,impressions\ncampaign_a,channel_a,185,8760\ncampaign_b,channel_b,203,5966'

    const model = {
      campaign: 0,
      channel: 1,
      clicks: 2,
      impressions: 3,
    }

    const resultDataset = [{
      campaign: 'campaign_a',
      channel: 'channel_a',
      clicks: 185,
      impressions: 8760,
    }, {
      campaign: 'campaign_b',
      channel: 'channel_b',
      clicks: 203,
      impressions: 5966,
    }]

    const resultOptions = [{
      value: 'campaign_a',
      label: 'campaign_a',
    }, {
      value: 'campaign_b',
      label: 'campaign_b',
    }, {
      value: 'channel_a',
      label: 'channel_a',
    }, {
      value: 'channel_b',
      label: 'channel_b',
    }]

    expect(csvToJson(csv, model)).to.eql({ options: resultOptions, adwordData: resultDataset })
  })

  it('should return the unique options and dataset in alphabetical order - first campaigns, then channels', () => {
    const csv = 'campaign,channel,clicks,impressions\ncampaign_b,channel_b,185,8760\ncampaign_a,channel_a,203,5966'

    const model = {
      campaign: 0,
      channel: 1,
      clicks: 2,
      impressions: 3,
    }

    const resultDataset = [{
      campaign: 'campaign_a',
      channel: 'channel_a',
      clicks: 203,
      impressions: 5966,
    }, {
      campaign: 'campaign_b',
      channel: 'channel_b',
      clicks: 185,
      impressions: 8760,
    }]

    const resultOptions = [{
      value: 'campaign_a',
      label: 'campaign_a',
    }, {
      value: 'campaign_b',
      label: 'campaign_b',
    }, {
      value: 'channel_a',
      label: 'channel_a',
    }, {
      value: 'channel_b',
      label: 'channel_b',
    }]

    expect(csvToJson(csv, model)).to.eql({ options: resultOptions, adwordData: resultDataset })
  })

  it('should return an object with empty arrays for options and dataset', () => {
    const csv = ''

    const model = {
      campaign: 0,
      channel: 1,
      clicks: 2,
      impressions: 3,
    }

    expect(csvToJson(csv, model)).to.eql({ options: [], adwordData: [] })
  })

  it('should be able to work without a csv-headline', () => {
    const csv = 'campaign_b,channel_b,185,8760\ncampaign_a,channel_a,203,5966'

    const resultDataset = [{
      col_1: 'campaign_a',
      col_2: 'channel_a',
      col_3: 203,
      col_4: 5966,
    }, {
      col_1: 'campaign_b',
      col_2: 'channel_b',
      col_3: 185,
      col_4: 8760,
    }]

    const resultOptions = [{
      value: 'campaign_a',
      label: 'campaign_a',
    }, {
      value: 'campaign_b',
      label: 'campaign_b',
    }, {
      value: 'channel_a',
      label: 'channel_a',
    }, {
      value: 'channel_b',
      label: 'channel_b',
    }]

    const model = {
      campaign: 0,
      channel: 1,
      clicks: 2,
      impressions: 3,
    }

    expect(csvToJson(csv, model)).to.eql({ options: resultOptions, adwordData: resultDataset })
  })
})