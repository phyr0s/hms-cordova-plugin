/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { IonicNativePlugin } from '@ionic-native/core';
export declare class HMSAnalytics extends IonicNativePlugin {
    setAnalyticsEnabled(enabled: boolean): Promise<void>;
    setUserId(userId: string): Promise<void>;
    setUserProfile(name: string, value: string): Promise<void>;
    deleteUserProfile(name: string): Promise<void>;
    setPushToken(token: string): Promise<void>;
    setMinActivitySessions(milliseconds: number): Promise<void>;
    setSessionDuration(milliseconds: number): Promise<void>;
    onEvent(eventId: HAEventType | string, params: HAParamType | EventParams): Promise<void>;
    clearCachedData(): Promise<void>;
    getAAID(): Promise<string>;
    getUserProfiles(predefined: boolean): Promise<UserProfiles>;
    pageStart(pageName: string, pageClassOverride: string): Promise<void>;
    pageEnd(pageName: string): Promise<void>;
    setReportPolicies(reportPolicies: ReportPolicy): Promise<void>;
    getReportPolicyThreshold(reportPolicyType: ReportPolicyType): Promise<number>;
    setRestrictionEnabled(isEnabled: boolean): Promise<void>;
    isRestrictionEnabled(): Promise<boolean>;
    addDefaultEventParams(params: EventParams): Promise<void>;
    enableLog(logLevel?: LogLevelType): Promise<void>;
    enableLogger(): Promise<void>;
    disableLogger(): Promise<void>;
}
export interface GenericObject {
    [key: string]: any;
}
export declare type UserProfiles = GenericObject;
export declare type EventParams = GenericObject;
/**
 * ReportPolicy types for Sets automatic event reporting policies.
 */
export interface ReportPolicy {
    "onScheduledTimePolicy"?: number;
    "onAppLaunchPolicy"?: boolean;
    "onMoveBackgroundPolicy"?: boolean;
    "onCacheThresholdPolicy"?: number;
}
/**
 * ReportPolicy types
 */
export declare enum ReportPolicyType {
    ON_SCHEDULED_TIME_POLICY = "ON_SCHEDULED_TIME_POLICY",
    ON_APP_LAUNCH_POLICY = "ON_APP_LAUNCH_POLICY",
    ON_MOVE_BACKGROUND_POLICY = "ON_MOVE_BACKGROUND_POLICY",
    ON_CACHE_THRESHOLD_POLICY = "ON_CACHE_THRESHOLD_POLICY"
}
/**
 * HiAnalyticsTools log level enum.
 */
export declare enum LogLevelType {
    DEBUG = 3,
    INFO = 4,
    WARN = 5,
    ERROR = 6
}
/**
* HAUserProfileType types for provides constants that define the names of all predefined user attributes.
*/
export declare enum HAUserProfileType {
    USERLEVEL = "user_level",
    ISFULLLEVEL = "is_full_level"
}
/**
 * HAEventType types for provides the IDs of all predefined events.
 */
export declare enum HAEventType {
    CREATEPAYMENTINFO = "$CreatePaymentInfo",
    ADDPRODUCT2CART = "$AddProduct2Cart",
    ADDPRODUCT2WISHLIST = "$AddProduct2WishList",
    STARTAPP = "$StartApp",
    STARTCHECKOUT = "$StartCheckout",
    VIEWCAMPAIGN = "$ViewCampaign",
    VIEWCHECKOUTSTEP = "$ViewCheckoutStep",
    WINVIRTUALCOIN = "$WinVirtualCoin",
    COMPLETEPURCHASE = "$CompletePurchase",
    OBTAINLEADS = "$ObtainLeads",
    JOINUSERGROUP = "$JoinUserGroup",
    COMPLETELEVEL = "$CompleteLevel",
    STARTLEVEL = "$StartLevel",
    UPGRADELEVEL = "$UpgradeLevel",
    SIGNIN = "$SignIn",
    SIGNOUT = "$SignOut",
    SUBMITSCORE = "$SubmitScore",
    CREATEORDER = "$CreateOrder",
    REFUNDORDER = "$RefundOrder",
    DELPRODUCTFROMCART = "$DelProductFromCart",
    SEARCH = "$Search",
    VIEWCONTENT = "$ViewContent",
    UPDATECHECKOUTOPTION = "$UpdateCheckoutOption",
    SHARECONTENT = "$ShareContent",
    REGISTERACCOUNT = "$RegisterAccount",
    CONSUMEVIRTUALCOIN = "$ConsumeVirtualCoin",
    STARTTUTORIAL = "$StartTutorial",
    COMPLETETUTORIAL = "$CompleteTutorial",
    OBTAINACHIEVEMENT = "$ObtainAchievement",
    VIEWPRODUCT = "$ViewProduct",
    VIEWPRODUCTLIST = "$ViewProductList",
    VIEWSEARCHRESULT = "$ViewSearchResult",
    UPDATEMEMBERSHIPLEVEL = "$UpdateMembershipLevel",
    FILTRATEPRODUCT = "$FiltrateProduct",
    VIEWCATEGORY = "$ViewCategory",
    UPDATEORDER = "$UpdateOrder",
    CANCELORDER = "$CancelOrder",
    COMPLETEORDER = "$CompleteOrder",
    CANCELCHECKOUT = "$CancelCheckout",
    OBTAINVOUCHER = "$ObtainVoucher",
    CONTACTCUSTOMSERVICE = "$ContactCustomService",
    RATE = "$Rate",
    INVITE = "$Invite",
    NOVICEGUIDESTART = "$NoviceGuideStart",
    NOVICEGUIDEEND = "$NoviceGuideEnd",
    STARTGAME = "$StartGame",
    ENDGAME = "$EndGame",
    WINPROPS = "$WinProps",
    CONSUMEPROPS = "$ConsumeProps",
    ADDFRIEND = "$AddFriend",
    ADDBLACKLIST = "$AddBlacklist",
    VIEWFRIENDLIST = "$ViewFriendList",
    QUITUSERGROUP = "$QuitUserGroup",
    CREATEUSERGROUP = "$CreateUserGroup",
    DISBANDUSERGROUP = "$DisbandUserGroup",
    UPGRADEUSERGROUP = "$UpgradeUserGroup",
    VIEWUSERGROUP = "$ViewUserGroup",
    JOINTEAM = "$JoinTeam",
    SENDMESSAGE = "$SendMessage",
    LEARNSKILL = "$LearnSkill",
    USESKILL = "$UseSkill",
    GETEQUIPMENT = "$GetEquipment",
    LOSEEQUIPMENT = "$LoseEquipment",
    ENHANCEEQUIPMENT = "$EnhanceEquipment",
    SWITCHCLASS = "$SwitchClass",
    ACCEPTTASK = "$AcceptTask",
    FINISHTASK = "$FinishTask",
    ATTENDACTIVITY = "$AttendActivity",
    FINISHCUTSCENE = "$FinishCutscene",
    SKIPCUTSCENE = "$SkipCutscene",
    GETPET = "$GetPet",
    LOSEPET = "$LosePet",
    ENHANCEPET = "$EnhancePet",
    GETMOUNT = "$GetMount",
    LOSEMOUNT = "$LoseMount",
    ENHANCEMOUNT = "$EnhanceMount",
    CREATEROLE = "$CreateRole",
    SIGNINROLE = "$SignInRole",
    SIGNOUTROLE = "$SignOutRole",
    STARTBATTLE = "$StartBattle",
    ENDBATTLE = "$EndBattle",
    STARTDUNGEON = "$StartDungeon",
    FINISHDUNGEON = "$FinishDungeon",
    VIEWPACKAGE = "$ViewPackage",
    REDEEM = "$Redeem",
    MODIFYSETTING = "$ModifySetting",
    WATCHVIDEO = "$WatchVideo",
    CLICKMESSAGE = "$ClickMessage",
    DRAWCARD = "$DrawCard",
    VIEWCARDLIST = "$ViewCardList",
    BINDACCOUNT = "$BindAccount",
    STARTEXERCISE = "$StartExercise",
    ENDEXERCISE = "$EndExercise",
    STARTPLAYMEDIA = "$StartPlayMedia",
    ENDPLAYMEDIA = "$EndPlayMedia",
    STARTEXAMINE = "$StartExamine",
    ENDEXAMINE = "$EndExamine",
    CHECKIN = "$CheckIn",
    COMPENSATION = "$Compensation",
    POST = "$Post",
    SHAREAPP = "$ShareApp",
    IMPROVEINFORMATION = "$ImproveInformation"
}
/**
* HAParamType types for provides the IDs of all predefined parameters,
* including the IDs of predefined parameters and user attributes.
*/
export declare enum HAParamType {
    STORENAME = "$StoreName",
    BRAND = "$Brand",
    CATEGORY = "$Category",
    PRODUCTID = "$ProductId",
    PRODUCTNAME = "$ProductName",
    PRODUCTFEATURE = "$ProductFeature",
    PRICE = "$Price",
    QUANTITY = "$Quantity",
    REVENUE = "$Revenue",
    CURRNAME = "$CurrName",
    PLACEID = "$PlaceId",
    DESTINATION = "$Destination",
    ENDDATE = "$EndDate",
    BOOKINGDAYS = "$BookingDays",
    PASSENGERSNUMBER = "$PassengersNumber",
    BOOKINGROOMS = "$BookingRooms",
    ORIGINATINGPLACE = "$OriginatingPlace",
    BEGINDATE = "$BeginDate",
    TRANSACTIONID = "$TransactionId",
    CLASS = "$Class",
    CLICKID = "$ClickId",
    PROMOTIONNAME = "$PromotionName",
    CONTENT = "$Content",
    EXTENDPARAM = "$ExtendParam",
    MATERIALNAME = "$MaterialName",
    MATERIALSLOT = "$MaterialSlot",
    MEDIUM = "$Medium",
    SOURCE = "$Source",
    KEYWORDS = "$Keywords",
    OPTION = "$Option",
    STEP = "$Step",
    VIRTUALCURRNAME = "$VirtualCurrName",
    VOUCHER = "$Voucher",
    PLACE = "$Place",
    SHIPPING = "$Shipping",
    TAXFEE = "$TaxFee",
    USERGROUPID = "$UserGroupId",
    LEVELNAME = "$LevelName",
    RESULT = "$Result",
    ROLENAME = "$RoleName",
    LEVELID = "$LevelId",
    CHANNEL = "$Channel",
    SCORE = "$Score",
    SEARCHKEYWORDS = "$SearchKeywords",
    CONTENTTYPE = "$ContentType",
    ACHIEVEMENTID = "$AchievementId",
    FLIGHTNO = "$FlightNo",
    POSITIONID = "$PositionId",
    PRODUCTLIST = "$ProductList",
    ACOUNTTYPE = "$AcountType",
    EVTRESULT = "$EvtResult",
    PREVLEVEL = "$PrevLevel",
    CURRVLEVEL = "$CurrvLevel",
    VOUCHERS = "$Vouchers",
    MATERIALSLOTTYPE = "$MaterialSlotType",
    LISTID = "$ListId",
    FILTERS = "$Filters",
    SORTS = "$Sorts",
    ORDERID = "$OrderId",
    PAYTYPE = "$PayType",
    REASON = "$Reason",
    EXPIREDATE = "$ExpireDate",
    VOUCHERTYPE = "$VoucherType",
    SERVICETYPE = "$ServiceType",
    DETAILS = "$Details",
    COMMENTTYPE = "$CommentType",
    REGISTMETHOD = "$RegistMethod",
    DURATION = "$Duration",
    LEVEL = "$Level",
    PURCHASEENTRY = "$PurchaseEntry",
    PROPS = "$Props",
    ENTRY = "$Entry",
    VIPLEVEL = "$VIPLevel",
    FIRSTSIGNIN = "$FirstSignIn",
    DISCOUNT = "$Discount",
    FIRSTPAY = "$FirstPay",
    TASKID = "$TaskId",
    FRIENDNUMBER = "$FriendNumber",
    USERGROUPNAME = "$UserGroupName",
    USERGROUPLEVEL = "$UserGroupLevel",
    MEMBERS = "$Members",
    LEVELBEFORE = "$LevelBefore",
    MESSAGETYPE = "$MessageType",
    ROLECOMBAT = "$RoleCombat",
    ISTOPLEVEL = "$IsTopLevel",
    ROLECLASS = "$RoleClass",
    SKILLNAME = "$SkillName",
    SKILLLEVEL = "$SkillLevel",
    SKILLLEVELBEFORE = "$SkillLevelBefore",
    EQUIPMENTID = "$EquipmentId",
    EQUIPMENTNAME = "$EquipmentName",
    EQUIPMENTLEVEL = "$EquipmentLevel",
    CLASSLIMIT = "$ClassLimit",
    LEVELLIMIT = "$LevelLimit",
    ISFREE = "$IsFree",
    TOTALAFTERCHANGE = "$TotalAfterChange",
    QUALITY = "$Quality",
    ENHANCETYPE = "$EnhanceType",
    NEWCLASS = "$NewClass",
    OLDCLASS = "$OldClass",
    TASKTYPE = "$TaskType",
    TASKNAME = "$TaskName",
    REWARD = "$Reward",
    ACTIVITYTYPE = "$ActivityType",
    ACTIVITYNAME = "$ActivityName",
    CUTSCENENAME = "$CutsceneName",
    PETID = "$PetId",
    PETDEFAULTNAME = "$PetDefaultName",
    PETLEVEL = "$PetLevel",
    MOUNTID = "$MountId",
    MOUNTDEFAULTNAME = "$MountDefaultName",
    MOUNTLEVEL = "$MountLevel",
    ROLEGENDER = "$RoleGender",
    SERVER = "$Server",
    FIRSTCREATE = "$FirstCreate",
    COMBAT = "$Combat",
    BATTLETYPE = "$BattleType",
    BATTLENAME = "$BattleName",
    NUMBEROFCARDS = "$NumberOfCards",
    CARDLIST = "$CardList",
    PARTICIPANTS = "$Participants",
    DIFFICULTY = "$Difficulty",
    MVP = "$MVP",
    DAMAGE = "$Damage",
    RANKING = "$Ranking",
    DUNGEONNAME = "$DungeonName",
    WINREASON = "$WinReason",
    BALANCE = "$Balance",
    PACKAGETYPE = "$PackageType",
    AMOUNT = "$Amount",
    ITEMLIST = "$ItemList",
    GIFTTYPE = "$GiftType",
    GIFTNAME = "$GiftName",
    TYPE = "$Type",
    OLDVALUE = "$OldValue",
    NEWVALUE = "$NewValue",
    VIDEOTYPE = "$VideoType",
    VIDEONAME = "$VideoName",
    MESSAGETITLE = "$MessageTitle",
    OPERATION = "$Operation",
    NUMBEROFDRAWING = "$NumberOfDrawing",
    LEFTPULLSFORGUARANTEE = "$LeftPullsForGuarantee",
    VIPTYPE = "$VipType",
    VIPSTATUS = "$VipStatus",
    VIPEXPIREDATE = "$VipExpireDate",
    ENTER = "$Enter",
    STARTDATE = "$StartDate",
    EFFECTIVETIME = "$EffectiveTime",
    NAME = "$Name",
    MODE = "$Mode",
    SUBJECT = "$Subject",
    ACCURACY = "$Accuracy",
    CONTENTLENGTH = "$ContentLength",
    REMARK = "$Remark",
    CONTENTNAME = "$ContentName",
    SECTION = "$Section",
    DAYS = "$Days",
    POSTID = "$PostId",
    INFORMATIONTYPE = "$InformationType",
    INFORMATION = "$Information"
}
