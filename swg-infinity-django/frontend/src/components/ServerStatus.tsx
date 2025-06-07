"use client";

import { useState, useEffect } from "react";
import { Check, AlertTriangle, X, Clock, RefreshCw } from "lucide-react";

type ServerState = "online" | "offline" | "maintenance" | "high-traffic" | "loading";

interface ServerStatusProps {
  className?: string;
  showRefresh?: boolean;
}

export function ServerStatus({ className = "", showRefresh = false }: ServerStatusProps) {
  const [status, setStatus] = useState<ServerState>("loading");
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // In a real implementation, this would fetch from an API
  // For demo purposes, we're simulating with some sample data
  const fetchServerStatus = async () => {
    setIsRefreshing(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo, we'll randomly choose a status with weighted probability
    const random = Math.random();
    let newStatus: ServerState;
    let newPlayerCount: number;

    if (random < 0.7) { // 70% chance server is online
      newStatus = "online";
      newPlayerCount = Math.floor(Math.random() * 500) + 300; // 300-800 players
    } else if (random < 0.85) { // 15% chance high traffic
      newStatus = "high-traffic";
      newPlayerCount = Math.floor(Math.random() * 300) + 800; // 800-1100 players
    } else if (random < 0.95) { // 10% chance maintenance
      newStatus = "maintenance";
      newPlayerCount = 0;
    } else { // 5% chance offline
      newStatus = "offline";
      newPlayerCount = 0;
    }

    setStatus(newStatus);
    setPlayerCount(newPlayerCount);
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchServerStatus();

    // Setup a refresh every 5 minutes (in a real implementation)
    const intervalId = setInterval(fetchServerStatus, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fetchServerStatus();
  };

  // Status indicator configuration
  const statusConfig = {
    online: {
      icon: <Check className="h-4 w-4" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      text: "Online",
      border: "border-green-500/20"
    },
    "high-traffic": {
      icon: <AlertTriangle className="h-4 w-4" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      text: "High Traffic",
      border: "border-yellow-500/20"
    },
    maintenance: {
      icon: <Clock className="h-4 w-4" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      text: "Maintenance",
      border: "border-blue-500/20"
    },
    offline: {
      icon: <X className="h-4 w-4" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      text: "Offline",
      border: "border-red-500/20"
    },
    loading: {
      icon: <RefreshCw className="h-4 w-4 animate-spin" />,
      color: "text-gray-400",
      bgColor: "bg-gray-500/10",
      text: "Checking...",
      border: "border-gray-500/20"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`rounded-md border px-3 py-2 ${config.border} ${config.bgColor}`}>
        <div className="flex items-center gap-2">
          <div className={`${config.color}`}>
            {config.icon}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${config.color}`}>
                Server: {config.text}
              </span>
              {showRefresh && (
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="text-gray-400 hover:text-gray-300 disabled:opacity-50"
                  title="Refresh server status"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
              )}
            </div>
            {status === "online" || status === "high-traffic" ? (
              <span className="text-xs text-gray-400">
                {playerCount} players online
              </span>
            ) : (
              <span className="text-xs text-gray-400">
                {status === "maintenance" ? "Scheduled maintenance" : "Please try again later"}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-right mt-1">
        Last updated: {lastUpdated.toLocaleTimeString()}
      </div>
    </div>
  );
}
