import {DefaultOptions} from "./DefaultOptions";
import Axios, {AxiosInstance, AxiosResponse} from "axios";
import {Utils, UtilsClass} from "./Utils";
import {WaxpeerOptions} from "./declarations/WaxpeerOptions";
import {UnexceptedError} from "./errors/UnexceptedError";
import {ApiBaseCanNotBeEmptyError} from "./errors/ApiBaseCanNotBeEmptyError";
import {ApiKeyCanNotBeEmptyError} from "./errors/ApiKeyCanNotBeEmptyError";
import {ParsedEndpoint} from "./declarations/ParsedEndpoint";
import {EHttpMethod} from "./declarations/enums/EHttpMethod";
import {UserRestResponse} from "./declarations/rest_responses/UserRestResponse";
import {UserEndpoint} from "./endpoints/UserEndpoint";
import {CommonQuerystringParameters} from "./declarations/rest_requests/CommonQuerystringParameters";
import {WrongApiKeyError} from "./errors/WrongApiKeyError";
import {ServerError} from "./errors/ServerError";
import {GetWcwTradesRestResponse} from "./declarations/rest_responses/GetWcwTradesRestResponse";
import {GetWcwTradesEndpoint} from "./endpoints/GetWcwTradesEndpoint";
import {ChangeTradelinkPostData} from "./declarations/rest_requests/ChangeTradelinkPostData";
import {ChangeTradelinkRestResponse} from "./declarations/rest_responses/ChangeTradelinkRestResponse";
import {ChangeTradelinkEndpoint} from "./endpoints/ChangeTradelinkEndpoint";
import {SetMySteamApiQuerystringParameters} from "./declarations/rest_requests/SetMySteamApiQuerystringParameters";
import {SetMySteamApiRestResponse} from "./declarations/rest_responses/SetMySteamApiRestResponse";
import {SetMySteamApiEndpoint} from "./endpoints/SetMySteamApiEndpoint";
import {BuyOneP2PQuerystringParameters} from "./declarations/rest_requests/BuyOneP2PQuerystringParameters";
import {BuyOneP2PRestResponse} from "./declarations/rest_responses/BuyOneP2PRestResponse";
import {BuyOneP2PEndpoint} from "./endpoints/BuyOneP2PEndpoint";
import {PricesQuerystringParameters} from "./declarations/rest_requests/PricesQuerystringParameters";
import {PricesRestResponse} from "./declarations/rest_responses/PricesRestResponse";
import {PricesEndpoint} from "./endpoints/PricesEndpoint";
import {BuyOneP2PNameRestResponse} from "./declarations/rest_responses/BuyOneP2PNameRestResponse";
import {BuyOneP2PNameEndpoint} from "./endpoints/BuyOneP2PNameEndpoint";
import {BuyOneP2PNameQuerystringParameters} from "./declarations/rest_requests/BuyOneP2PNameQuerystringParameters";
import {ReadyToTransferP2PQuerystringParameters} from "./declarations/rest_requests/ReadyToTransferP2PQuerystringParameters";
import {ReadyToTransferP2PRestResponse} from "./declarations/rest_responses/ReadyToTransferP2PRestResponse";
import {ReadyToTransferP2PEndpoint} from "./endpoints/ReadyToTransferP2PEndpoint";
import {CheckAvailabilityQuerystringParameters} from "./declarations/rest_requests/CheckAvailabilityQuerystringParameters";
import {CheckAvailabilityRestResponse} from "./declarations/rest_responses/CheckAvailabilityRestResponse";
import {CheckAvailabilityEndpoint} from "./endpoints/CheckAvailabilityEndpoint";
import {GetItemsListQuerystringParameters} from "./declarations/rest_requests/GetItemsListQuerystringParameters";
import {GetItemsListRestResponse} from "./declarations/rest_responses/GetItemsListRestResponse";
import {GetItemsListEndpoint} from "./endpoints/GetItemsListEndpoint";
import {FetchMyInventoryRestResponse} from "./declarations/rest_responses/FetchMyInventoryRestResponse";
import {FetchMyInventoryEndpoint} from "./endpoints/FetchMyInventoryEndpoint";
import {EditItemsPostData} from "./declarations/rest_requests/EditItemsPostData";
import {EditItemsRestResponse} from "./declarations/rest_responses/EditItemsRestResponse";
import {EditItemsEndpoint} from "./endpoints/EditItemsEndpoint";
import {ListItemsFromSteamPostData} from "./declarations/rest_requests/ListItemsFromSteamPostData";
import {ListItemsFromSteamRestResponse} from "./declarations/rest_responses/ListItemsFromSteamRestResponse";
import {ListItemsFromSteamEndpoint} from "./endpoints/ListItemsFromSteamEndpoint";
import {ListItemsSteamRestResponse} from "./declarations/rest_responses/ListItemsSteamRestResponse";
import {ListItemsSteamEndpoint} from "./endpoints/ListItemsSteamEndpoint";
import {GetMyInventoryQuerystringParameters} from "./declarations/rest_requests/GetMyInventoryQuerystringParameters";
import {GetMyInventoryRestResponse} from "./declarations/rest_responses/GetMyInventoryRestResponse";
import {GetMyInventoryEndpoint} from "./endpoints/GetMyInventoryEndpoint";
import {SearchItemsByNameQuerystringParameters} from "./declarations/rest_requests/SearchItemsByNameQuerystringParameters";
import {SearchItemsByNameEndpoint} from "./endpoints/SearchItemsByNameEndpoint";
import {SearchItemsByNameRestResponse} from "./declarations/rest_responses/SearchItemsByNameRestResponse";
import {CheckTradelinkPostData} from "./declarations/rest_requests/CheckTradelinkPostData";
import {BaseRestResponse} from "./declarations/rest_responses/BaseRestResponse";
import {CheckTradelinkEndpoint} from "./endpoints/CheckTradelinkEndpoint";
import {RemoveItemsQuerystringParameters} from "./declarations/rest_requests/RemoveItemsQuerystringParameters";
import {RemoveItemsRestResponse} from "./declarations/rest_responses/RemoveItemsRestResponse";
import {RemoveItemsEndpoint} from "./endpoints/RemoveItemsEndpoint";
import {CheckManySteamQuerystringParameters} from "./declarations/rest_requests/CheckManySteamQuerystringParameters";
import {CheckManySteamEndpoint} from "./endpoints/CheckManySteamEndpoint";
import {CheckManySteamRestResponse} from "./declarations/rest_responses/CheckManySteamRestResponse";
import {InventoryRestResponse} from "./declarations/rest_responses/InventoryRestResponse";
import {InventoryEndpoint} from "./endpoints/InventoryEndpoint";
import {LoadItemsWcwQuerystringParameters} from "./declarations/rest_requests/LoadItemsWcwQuerystringParameters";
import {LoadItemsWcwEndpoint} from "./endpoints/LoadItemsWcwEndpoint";
import {LoadItemsWcwRestResponse} from "./declarations/rest_responses/LoadItemsWcwRestResponse";
import {NewTradeOfferQuerystringParameters} from "./declarations/rest_requests/NewTradeOfferQuerystringParameters";
import {NewTradeOfferRestResponse} from "./declarations/rest_responses/NewTradeOfferRestResponse";
import {NewTradeOfferEndpoint} from "./endpoints/NewTradeOfferEndpoint";

export class WaxpeerApi {
  private _Options: WaxpeerOptions;
  private _AxiosInstance: AxiosInstance;

  public Utils: UtilsClass;

  constructor(options: Partial<WaxpeerOptions>) {
    this._Options = DefaultOptions;
    this._AxiosInstance = Axios.create();

    this.Utils = Utils;

    this.SetOptionsAndReinitialize(options);
  }

  public get Options(): WaxpeerOptions {
    return this._Options;
  }

  /**
   * Allows dynamically change options.
   * @param options Options to overwrite
   */
  public SetOptionsAndReinitialize(options: Partial<WaxpeerOptions>): void {
    this._Options = {...DefaultOptions, ...options};
    this._AxiosInstance = Axios.create({
      baseURL: this._Options.ApiBase,
      timeout: 10000
    });
  }

  private async CallAxios<ResponseInterface>(endpoint: ParsedEndpoint): Promise<ResponseInterface> {
    this.CheckErrors(endpoint);

    try {
      let response: AxiosResponse<ResponseInterface>;

      if (endpoint.Method === EHttpMethod.GET) {
        response = await this._AxiosInstance.get<undefined, AxiosResponse<ResponseInterface>>(endpoint.Url);
      } else {
        response = await this._AxiosInstance.post<undefined, AxiosResponse<ResponseInterface>>(endpoint.Url, endpoint.Data);
      }

      if (response.status === 403) {
        throw new WrongApiKeyError();
      } else if (response.status === 500) {
        throw new ServerError();
      } else if (response.status !== 200) {
        throw new UnexceptedError('Waxpeer server returned unexcepted http status.');
      }

      return response.data;
    } catch (e) {
      if (
        e instanceof WrongApiKeyError ||
        e instanceof ServerError ||
        e instanceof UnexceptedError ||
        e instanceof ApiBaseCanNotBeEmptyError ||
        e instanceof ApiKeyCanNotBeEmptyError
      ) {
        throw e;
      }

      throw new UnexceptedError(e.message);
    }
  }

  private CheckErrors(endpoint: ParsedEndpoint): void {
    if (this._Options.ApiBase === '') {
      throw new ApiBaseCanNotBeEmptyError();
    } else if (this._Options.ApiKey === '' && endpoint.ApiKey === '') {
      throw new ApiKeyCanNotBeEmptyError();
    }
  }

  // region Api Methods

  public async User(queryParameters?: CommonQuerystringParameters): Promise<UserRestResponse> {
    const parsedEndpoint = new UserEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<UserRestResponse>(parsedEndpoint);
  }

  public async GetWcwTrades(queryParameters?: CommonQuerystringParameters): Promise<GetWcwTradesRestResponse> {
    const parsedEndpoint = new GetWcwTradesEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<GetWcwTradesRestResponse>(parsedEndpoint);
  }

  public async ChangeTradelink(postData: ChangeTradelinkPostData, queryParameters?: CommonQuerystringParameters): Promise<ChangeTradelinkRestResponse> {
    const parsedEndpoint = new ChangeTradelinkEndpoint(this.Options.ApiKey).Build(queryParameters, postData);
    return await this.CallAxios<ChangeTradelinkRestResponse>(parsedEndpoint);
  }

  public async SetMySteamApi(queryParameters: SetMySteamApiQuerystringParameters): Promise<SetMySteamApiRestResponse> {
    const parsedEndpoint = new SetMySteamApiEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<SetMySteamApiRestResponse>(parsedEndpoint);
  }

  public async BuyOneP2P(queryParameters: BuyOneP2PQuerystringParameters): Promise<BuyOneP2PRestResponse> {
    const parsedEndpoint = new BuyOneP2PEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<BuyOneP2PRestResponse>(parsedEndpoint);
  }

  public async Prices(queryParameters: PricesQuerystringParameters): Promise<PricesRestResponse> {
    const parsedEndpoint = new PricesEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<PricesRestResponse>(parsedEndpoint);
  }

  public async BuyOneP2PName(queryParameters: BuyOneP2PNameQuerystringParameters): Promise<BuyOneP2PNameRestResponse> {
    const parsedEndpoint = new BuyOneP2PNameEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<BuyOneP2PNameRestResponse>(parsedEndpoint);
  }

  public async ReadyToTransferP2P(queryParameters: ReadyToTransferP2PQuerystringParameters): Promise<ReadyToTransferP2PRestResponse> {
    const parsedEndpoint = new ReadyToTransferP2PEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<ReadyToTransferP2PRestResponse>(parsedEndpoint);
  }

  public async CheckAvailability(queryParameters: CheckAvailabilityQuerystringParameters): Promise<CheckAvailabilityRestResponse> {
    const parsedEndpoint = new CheckAvailabilityEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<CheckAvailabilityRestResponse>(parsedEndpoint);
  }

  public async GetItemsList(queryParameters?: GetItemsListQuerystringParameters): Promise<GetItemsListRestResponse> {
    const parsedEndpoint = new GetItemsListEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<GetItemsListRestResponse>(parsedEndpoint);
  }

  public async FetchMyInventory(queryParameters?: CommonQuerystringParameters): Promise<FetchMyInventoryRestResponse> {
    const parsedEndpoint = new FetchMyInventoryEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<FetchMyInventoryRestResponse>(parsedEndpoint);
  }

  public async EditItems(postData: EditItemsPostData, queryParameters?: CommonQuerystringParameters): Promise<EditItemsRestResponse> {
    const parsedEndpoint = new EditItemsEndpoint(this.Options.ApiKey).Build(queryParameters, postData);
    return await this.CallAxios<EditItemsRestResponse>(parsedEndpoint);
  }

  public async ListItemsFromSteam(postData: ListItemsFromSteamPostData, queryParameters?: CommonQuerystringParameters): Promise<ListItemsFromSteamRestResponse> {
    const parsedEndpoint = new ListItemsFromSteamEndpoint(this.Options.ApiKey).Build(queryParameters, postData);
    return await this.CallAxios<ListItemsFromSteamRestResponse>(parsedEndpoint);
  }

  public async ListItemsSteam(queryParameters?: CommonQuerystringParameters): Promise<ListItemsSteamRestResponse> {
    const parsedEndpoint = new ListItemsSteamEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<ListItemsSteamRestResponse>(parsedEndpoint);
  }

  public async GetMyInventory(queryParameters?: GetMyInventoryQuerystringParameters): Promise<GetMyInventoryRestResponse> {
    const parsedEndpoint = new GetMyInventoryEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<GetMyInventoryRestResponse>(parsedEndpoint);
  }

  public async SearchItemsByName(queryParameters: SearchItemsByNameQuerystringParameters): Promise<SearchItemsByNameRestResponse> {
    const parsedEndpoint = new SearchItemsByNameEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<SearchItemsByNameRestResponse>(parsedEndpoint);
  }

  public async CheckTradelink(postData: CheckTradelinkPostData, queryParameters?: CommonQuerystringParameters): Promise<BaseRestResponse> {
    const parsedEndpoint = new CheckTradelinkEndpoint(this.Options.ApiKey).Build(queryParameters, postData);
    return await this.CallAxios<BaseRestResponse>(parsedEndpoint);
  }

  public async RemoveItems(queryParameters: RemoveItemsQuerystringParameters): Promise<RemoveItemsRestResponse> {
    const parsedEndpoint = new RemoveItemsEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<RemoveItemsRestResponse>(parsedEndpoint);
  }

  public async CheckManySteam(queryParameters: CheckManySteamQuerystringParameters): Promise<CheckManySteamRestResponse> {
    const parsedEndpoint = new CheckManySteamEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<CheckManySteamRestResponse>(parsedEndpoint);
  }

  public async Inventory(queryParameters?: CommonQuerystringParameters): Promise<InventoryRestResponse> {
    const parsedEndpoint = new InventoryEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<InventoryRestResponse>(parsedEndpoint);
  }

  public async LoadItemsWcw(queryParameters: LoadItemsWcwQuerystringParameters): Promise<LoadItemsWcwRestResponse> {
    const parsedEndpoint = new LoadItemsWcwEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<LoadItemsWcwRestResponse>(parsedEndpoint);
  }

  public async NewTradeOffer(queryParameters: NewTradeOfferQuerystringParameters): Promise<NewTradeOfferRestResponse> {
    const parsedEndpoint = new NewTradeOfferEndpoint(this.Options.ApiKey).Build(queryParameters);
    return await this.CallAxios<NewTradeOfferRestResponse>(parsedEndpoint);
  }

  // endregion
}
