import BigNumber from "bignumber.js";
import {InvalidTradelinkError} from "./errors/InvalidTradelinkError";
import {ParsedTradelink} from "./declarations/ParsedTradelink";

export class UtilsClass {
  private static tradeUrlRegex = /^https:\/\/steamcommunity.com\/tradeoffer\/new\/\?partner=([0-9]{6,32})&token=([a-z0-9]{3,12})$/i;

  public IsSteamTradelinkValid(tradeLink: string): boolean {
    return UtilsClass.tradeUrlRegex.test(tradeLink);
  }

  public ParseSteamTradelink(tradeLink: string): ParsedTradelink {
    if( this.IsSteamTradelinkValid(tradeLink) ) {
      const executed = UtilsClass.tradeUrlRegex.exec(tradeLink);

      if (executed !== null) {
        return {
          partner: executed[1],
          token: executed[2]
        };
      }
    }

    throw new InvalidTradelinkError();
  }

  public StringifyParsedTradelink( parsedTradelink: ParsedTradelink ): string {
    return `https://steamcommunity.com/tradeoffer/new/?partner=${parsedTradelink.partner}&token=${parsedTradelink.token}`;
  }

  public GetFullCSGOItemImagePath(imageName: string): string {
    return `https://steamcommunity-a.akamaihd.net/economy/image/${imageName}`;
  }

  public FormatPrice(floatPrice: number): number {
    return Math.ceil(new BigNumber(floatPrice).multipliedBy(1000).toNumber());
  }
}

export const Utils = new UtilsClass();
