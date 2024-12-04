interface ShareOptions {
  title?: string;
  text: string;
  url: string;
}

interface ShareStats {
  shareClicks?: number;
  inviteCount?: number;
}

export const shareContent = async (options: ShareOptions): Promise<boolean> => {
  try {
    if (navigator.share && navigator.canShare(options)) {
      await navigator.share(options);
      return true;
    }

    // Fallback to clipboard
    const shareText = `${options.text}\n${options.url}`;
    await navigator.clipboard.writeText(shareText);
    return true;
  } catch (error: any) {
    if (!error.toString().includes("AbortError")) {
      console.error("Error sharing:", error);
    }

    return false;
  }
};

export const trackShare = async (userId: string, type: "quiz" | "invite"): Promise<void> => {
  try {
    const stats: ShareStats = {};
    if (type === "quiz") {
      stats.shareClicks = 1;
    } else {
      stats.inviteCount = 1;
    }

    await fetch("/api/user-data/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        ...stats,
      }),
    });
  } catch (error) {
    console.error("Error tracking share:", error);
  }
};
