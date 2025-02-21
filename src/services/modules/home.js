import diyRequest from "..";

export function getHomeGoodPriceData() {
  return diyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return diyRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return diyRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return diyRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return diyRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return diyRequest.get({
    url: "/home/plus",
  });
}
