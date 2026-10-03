public class UrlFailoverClient {

    private FallbackUrlConfig config;

    public UrlFailoverClient(FallbackUrlConfig config) {
        this.config = config;
    }

    public String request(String path) {
        List<String> urls = new ArrayList<>();
        urls.add(config.getPrimaryUrl());
        urls.addAll(config.getBackupUrls());

        for (String url : urls) {
            try {
                return doRequest(url + path);
            } catch (Exception e) {
                System.out.println("请求失败，切换备用地址：" + url);
            }
        }
        throw new RuntimeException("所有网址均不可用");
    }

    private String doRequest(String url) {
        // 模拟 HTTP 请求
        return "success from " + url;
    }
}
