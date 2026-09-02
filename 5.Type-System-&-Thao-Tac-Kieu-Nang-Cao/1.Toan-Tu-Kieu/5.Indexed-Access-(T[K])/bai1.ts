/*
Truy xuất kiểu cơ bản và lồng nhau
Cho cấu trúc dữ liệu người dùng phức tạp từ API:

TypeScript
type ApiResponsePayload = {
  metadata: {
    page: number;
    total: number;
    hasNextPage: boolean;
  };
  data: {
    user: {
      id: string;
      profile: {
        bio: string;
        socials: {
          twitter?: string;
          github: string;
        };
      };
    };
  };
};
Yêu cầu:

Dùng Indexed Access để tạo type UserMetadata tương ứng với thuộc tính metadata.

Tạo type SocialLinks trích xuất trực tiếp đến object socials.

Tạo type GitHubHandle trích xuất kiểu của github.
*/
type ApiResponsePayload = {
  metadata: {
    page: number;
    total: number;
    hasNextPage: boolean;
  };
  data: {
    user: {
      id: string;
      profile: {
        bio: string;
        socials: {
          twitter?: string;
          github: string;
        };
      };
    };
  };
};
type UserMetadata = ApiResponsePayload["metadata"];
type SocialLinks = ApiResponsePayload["data"]["user"]["profile"]["socials"];
type GitHubHandle = ApiResponsePayload["data"]["user"]["profile"]["socials"]["github"];