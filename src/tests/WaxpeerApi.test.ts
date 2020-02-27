import {Utils} from "../lib/Utils";
import {ParsedTradelink} from "../lib/declarations/ParsedTradelink";

describe('Utils', () => {
  it('should GetTradeObject method make trade object', () => {
    const tradeObject = Utils.ParseSteamTradelink('https://steamcommunity.com/tradeoffer/new/?partner=0123456789&token=abc123ABC');
    expect(tradeObject.partner).toBe('0123456789');
    expect(tradeObject.token).toBe('abc123ABC');
  });

  it('should FormatPrice convert price correctly', () => {
    const result = Utils.FormatPrice(5.14);
    expect(result).toBe(5140);
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
