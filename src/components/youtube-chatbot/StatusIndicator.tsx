import React from 'react';
import { Check, AlertCircle, Loader2, Wifi, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatusType = 'connected' | 'processing' | 'error' | 'offline' | 'loading';

interface StatusIndicatorProps {
  status: StatusType;
  message?: string;
  className?: string;
}

export function StatusIndicator({ status, message, className }: StatusIndicatorProps) {
  const getStatusConfig = (status: StatusType) => {
    switch (status) {
      case 'connected':
        return {
          icon: Check,
          color: 'text-green-500',
          bgColor: 'bg-green-500/10',
          message: message || 'Connected to video'
        };
      case 'processing':
        return {
          icon: Loader2,
          color: 'text-youtube-blue',
          bgColor: 'bg-youtube-blue/10',
          message: message || 'Processing transcript...',
          animate: 'animate-spin'
        };
      case 'error':
        return {
          icon: AlertCircle,
          color: 'text-youtube-red',
          bgColor: 'bg-youtube-red/10',
          message: message || 'Connection error'
        };
      case 'offline':
        return {
          icon: WifiOff,
          color: 'text-youtube-text-secondary',
          bgColor: 'bg-youtube-text-secondary/10',
          message: message || 'Offline'
        };
      case 'loading':
        return {
          icon: Loader2,
          color: 'text-youtube-text-secondary',
          bgColor: 'bg-youtube-text-secondary/10',
          message: message || 'Loading...',
          animate: 'animate-spin'
        };
      default:
        return {
          icon: AlertCircle,
          color: 'text-youtube-text-secondary',
          bgColor: 'bg-youtube-text-secondary/10',
          message: 'Unknown status'
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <div className={cn(
      "flex items-center space-x-2 px-3 py-2 rounded-lg",
      config.bgColor,
      className
    )}>
      <Icon className={cn(
        "w-4 h-4",
        config.color,
        config.animate
      )} />
      <span className="text-sm text-youtube-text-primary">
        {config.message}
      </span>
    </div>
  );
}