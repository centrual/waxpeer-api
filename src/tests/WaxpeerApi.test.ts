import {Utils} from "../lib/Utils";
import {ParsedTradelink} from "../lib/declarations/ParsedTradelink";
import {WaxpeerApi} from "../lib/WaxpeerApi";
import {EItemListGameType} from "../lib/declarations/enums/EItemListGameType";
import {EItemListDetailLevel} from "../lib/declarations/enums/EItemListDetailLevel";

let waxpeerApi: WaxpeerApi;

beforeAll((doneCallback) => {
  waxpeerApi = new WaxpeerApi({
    ApiKey: process.env.API_KEY
  });
  doneCallback();
});

describe('Api', () => {
  it('should fetch item list', async () => {
    const result = await waxpeerApi.GetItemsList({
      game: EItemListGameType.CSGO,
      minified: EItemListDetailLevel.MOST_DETAILED
    });

    expect(result.success).toBe(true);
  });
});

describe('Utils', () => {
  it('should GetTradeObject method make trade object', () => {
    const tradeObject = Utils.ParseSteamTradelink('https://steamcommunity.com/tradeoffer/new/?partner=0123456789&token=abc123ABC');
    expect(tradeObject.partner).toBe('0123456789');
    expect(tradeObject.token).toBe('abc123ABC');
  });

  it('should ConvertPriceToCoins convert correctly', () => {
    const result = Utils.ConvertPriceToCoins(5.14);
    expect(result).toBe(5140);
  });

  it('should ConvertCoinsToPrice convert correctly', () => {
    const result = Utils.ConvertCoinsToPrice(5140);
    expect(result).toBe(5.14);
  });

  it('should GetFullCSGOItemImagePath work', () => {
    const result = Utils.GetFullCSGOItemImagePath('test');
    expect(result).toBe('https://steamcommunity-a.akamaihd.net/economy/image/test');
  });

  it('should StringifyParsedTradelink work', () => {
    const parsedTradelink: ParsedTradelink = {
      partner: 'test',
      token: 'test'
    };

    const result = Utils.StringifyParsedTradelink(parsedTradelink);
    expect(result).toBe(`https://steamcommunity.com/tradeoffer/new/?partner=test&token=test`);
  });

  it('should IsSteamTradelinkValid work', () => {
    const result = Utils.IsSteamTradelinkValid(`https://steamcommunity.com/tradeoffer/new/?partner=0123456789&token=testtest`);
    expect(result).toBe(true);
  });
});
